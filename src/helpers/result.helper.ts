export const resultHelper = (res: any, result: any, status: any, message: String) => {
  const resultPrint = {} as any;
  const statusCode = status.toString();

  resultPrint.statusCode = status;

  if (statusCode.match(/20*/)) {
    resultPrint.status = "Success";
  } else if (statusCode.match(/40*/)) {
    resultPrint.status = "Client Error";
  } else if (statusCode.match(/50*/)) {
    resultPrint.status = "Server Error";
  }

  try {
    if (!result) throw "result kosong";
    resultPrint.data = result;
  } catch (error) {}

  try {
    if (!message) throw "message kosong";
    resultPrint.message = message;
  } catch (error) {
  }

  res.status(status).send(resultPrint);
};
