import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ApiGetResponse, ApiRequest, ApiResponse } from './api.types';

interface UpdateDataRequest {
  itemID: number;
  data: ApiRequest;
}

const personalID = 61797;

const apiURL = {
  baseUrl: 'http://185.244.172.108:8081/',
  additionalUrl: `/v1/outlay-rows/entity/${personalID}/row/`,
  get: `/list`,
  create: `/create`,
  update: `/update`,  // {rID}
  deletePath: `/delete`,  // {rID}
};

const {baseUrl, additionalUrl, create, deletePath, get, update} = apiURL

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (build) => ({
    getData: build.query<ApiGetResponse[], null>({
      query: () => additionalUrl + get,
    }),
    createData: build.mutation<ApiResponse, ApiRequest>({
      query: (data) => ({
        url: additionalUrl + create,
        method: 'POST',
        body: data,
      }),
    }),
    updateData: build.mutation<ApiResponse, UpdateDataRequest>({
      query: ({ itemID, data }) => ({
        url: `${additionalUrl}${itemID}${update}`,
        method: 'POST',
        body: data,
      }),
    }),
    deleteItem: build.mutation({
      query: (itemID) => ({
        url: `${additionalUrl}${itemID}${deletePath}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const { 
    useGetDataQuery, 
    useCreateDataMutation, 
    useUpdateDataMutation, 
    useDeleteItemMutation 
  } = api;
