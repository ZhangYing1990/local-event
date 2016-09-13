/**
 * Created by zhiyuans on 9/13/2016.
 */
export const NAVIGATOR = {
  SWITCH_TAB: 'SWITCH_TAB'
};

export function switchTab(currentIndex) {
  return {
    type: NAVIGATOR.SWITCH_TAB,
    currentIndex
  }
}