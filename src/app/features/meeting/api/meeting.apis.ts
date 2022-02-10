import { httpService } from "../../../lib/services/http.service";
import { meetingEndpoint } from "./meeting.endpoints";

export const getAllShareholdersApi = () => {
  return httpService.get(`${meetingEndpoint.getShareholders}`).then((response) => {
    return response.data;
  });
};

export const getAttendedShareholdersApi = () => {
  return httpService.get(`${meetingEndpoint.getAttendedShareholders}`).then((response) => {
    return response.data;
  })
}
