const { default: LocalizedStrings } = require("react-native-localization");
// import { en } from "@/localization/en";
// import { ma } from "@/localization/ma";
import { en } from "./en";
import { ma } from "./ma";

export const string = new LocalizedStrings({en, ma});