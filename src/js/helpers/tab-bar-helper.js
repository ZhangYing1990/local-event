/**
 * Created by ZhiyuanSun on 16/9/13.
 */
const URL_PATH = {
  HOME: '/home',
  CONTENT: '/content',
  MINE: '/mine',
  INDEX: '/'
};

const TAB_BAR_ID= {
  HOME: 0,
  CONTENT: 1,
  MINE: 2
};

const tabBarMap =  new Map([
  [URL_PATH.HOME, TAB_BAR_ID.HOME],
  [URL_PATH.INDEX, TAB_BAR_ID.HOME],
  [URL_PATH.CONTENT, TAB_BAR_ID.CONTENT],
  [URL_PATH.MINE, TAB_BAR_ID.MINE]
]);

const getTabIdByUrlPath = (urlPath) =>{
  return tabBarMap.get(urlPath);
};

export const TabBarHelper = {
  URL_PATH,
  TAB_BAR_ID,
  getTabIdByUrlPath
};