export { DrawerList } from "./DrawerList";

export const drawerListItems = [
  "Inbox",
  "Starred",
  "Send email",
  "Drafts",
] as const;

export interface IDrawerList {
  variant: "collapsed" | "expanded";
}
