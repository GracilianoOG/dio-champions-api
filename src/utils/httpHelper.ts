import { HttpResponse } from "../models/httpResponseModel";

export const OK = async (data: any): Promise<HttpResponse> => {
  return {
    statusCode: 200,
    body: data,
  };
};

export const NO_CONTENT = async (): Promise<HttpResponse> => {
  return {
    statusCode: 204,
    body: null,
  };
};

export const BAD_REQUEST = async (): Promise<HttpResponse> => {
  return {
    statusCode: 400,
    body: null,
  };
};
