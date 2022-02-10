import { getAllShareholdersApi, getAttendedShareholdersApi } from "./meeting.apis";

export const savingToStateFromApi = (result: any, setLoading: any, setShareholdersList: any) => {
  setLoading(false);
  setShareholdersList(result);
};

// interface getProps {
//   setShareholdersList: React.Dispatch<React.SetStateAction<[]>>,
//   setLoading: React.Dispatch<React.SetStateAction<boolean>>
// }

export const getShareholdersList = (
  setShareholdersList: any,
  setLoading: any
) => {
  setLoading(true);
  getAllShareholdersApi()
    .then((result) => {
      savingToStateFromApi(result, setLoading, setShareholdersList);
      setShareholdersList(result);
      setLoading(false);
    })
    .catch((error) => {
      setLoading(false);
      throw error;
    });
};

export const getAttendedShareholdersList = (
  setAttendedShareholderList: any,
  setLoading: any
) => {
  setLoading(true);
  getAttendedShareholdersApi()
    .then((result) => {
      savingToStateFromApi(result, setLoading, setAttendedShareholderList);
      setLoading(false);
    })
    .catch((error) => {
      setLoading(false);
      throw error;
    });
};
