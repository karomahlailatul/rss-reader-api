import { Response, Request } from "express";
import { resultHelper } from "../helpers/result.helper";
import Parser from "rss-parser";

const RSS = {
  CNN: async (req: Request, res: Response) => {
    try {
      const Type = req.params.type;
      const parser = new Parser();
      let URL = "";
      switch (Type.toLocaleUpperCase()) {
        case "cnn":
          URL = "https://www.cnnindonesia.com/nasional/rss" as string;
          break;
        case "cnbc":
          URL = "https://www.cnbcindonesia.com/news/rss" as string;
          break;
        case "kumparan":
          URL = "https://lapi.kumparan.com/v2.0/rss/" as string;
          break;
        case "mediaindonesia":
          URL = "https://mediaindonesia.com/feed" as string;
          break;
        case "vice":
          URL = "https://www.vice.com/id/rss?locale=id_id" as string;
          break;
        default:
          return resultHelper(
            res,
            null,
            404,
            "RSS Type Error , Hanya Tersedia CNN, CNBC, KUMPARAN, MEDIAINDONESIA, Dan VICE"
          );
      }
      const feed = await parser.parseURL(URL);
      return resultHelper(res, feed.items, 200, "RSS Success");
    } catch (error: any) {
      return resultHelper(res, error, 404, "Error");
    }
  },
};

export default RSS;
