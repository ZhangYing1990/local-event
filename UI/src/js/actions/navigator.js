/**
 * Created by zhiyuans on 9/13/2016.
 */
// Define action type string
export const NAVIGATOR = {
  SWITCH_TAB: 'SWITCH_TAB'
};

// Define actions
export function switchTab(currentTabId) {
  return {
    type: NAVIGATOR.SWITCH_TAB,
    currentTabId
  }
}