import { environment } from "../../../../environments/environment";

export const meetingEndpoint = {
  getShareholders: `${environment.urls.api}/shareholders/all`,
  getAttendedShareholders: `${environment.urls.api}/shareholders/attended-shareholders`
};
