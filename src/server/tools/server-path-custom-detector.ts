import type { Request, Response } from 'express';
import type { LanguageDetectorInterfaceOptions } from 'i18next-http-middleware';
import { DEFAULT_APP_LANGUAGE } from '@constants/index';

export default {
  name: 'path',

  lookup(
    req: Request,
    res: Response,
    options: LanguageDetectorInterfaceOptions,
  ): string | undefined {
    let found;

    if (req === undefined) {
      return found;
    }

    if (options.lookupPath !== undefined && req.params) {
      found = options.getParams(req)[options.lookupPath];
    }

    if (!found && typeof options.lookupFromPathIndex === 'number' && options.getOriginalUrl(req)) {
      const [path] = options.getOriginalUrl(req).split('?');
      const parts = path.split('/');

      if (parts[0] === '') {
        // Handle paths that start with a slash, i.e., '/foo' -> ['', 'foo']
        parts.shift();
      }

      if (parts.length > options.lookupFromPathIndex) {
        found = parts[options.lookupFromPathIndex];
      }
    }

    if (!options.allowPath.includes(found)) {
      // Simulate fallback lang
      found = DEFAULT_APP_LANGUAGE;
    }

    return found as string;
  },
};
