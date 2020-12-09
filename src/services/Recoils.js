import { atom } from "recoil";

export const ErrorStatus = atom({
  key: "error_status",
  default: "",
});

export const ErrorMessage = atom({
  key: "error_message",
  default: "",
});

export const Show = atom({
  key: "show",
  default: false,
});

export const IsAuthenticated = atom({
  key: "is_authenticated",
  default: false,
});

export const PhoneNumber = atom({
  key: "phone_number",
  default: "",
});

export const Name = atom({
  key: "name",
  default: "",
});

export const LastName = atom({
  key: "lastname",
  default: "",
});

export const UserImage = atom({
  key: "user-image",
  default: "",
});

export const UserRole = atom({
  key: "user-role",
  default: "",
});

export const TriggerIsAuthenticated = atom({
  key: "trigger_is_authenticated",
  default: false,
});

export const TriggerUserInfoFormSubmit = atom({
  key: "trigger_user_info_form_submit",
  default: false,
});

export const TriggerSingleCourseRefresh = atom({
  key: "trigger_single_course_refresh",
  default: false,
});
