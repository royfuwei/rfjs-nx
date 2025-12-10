import { ApiResData, ApiResPaginated } from '@rfjs-nx/common';

export const apiResData = <T>(
  data: T | T[] | null,
  status = 200,
  success = true,
): ApiResData<T> => {
  return {
    success,
    status,
    data,
  };
};

export const apiResPaginated = <T>(
  data: T[],
  total: number,
  status = 200,
  success = true,
): ApiResPaginated<T> => {
  return {
    success,
    status,
    total,
    data,
  };
};
