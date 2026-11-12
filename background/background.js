import { BEATMAP_URL_REGEX } from '../common/constants';

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (!tab || !tab.url) {
    return;
  }

  const matchesBeatmapUrl = BEATMAP_URL_REGEX.test(tab.url);

  if (changeInfo.status === 'complete' && matchesBeatmapUrl) {
    chrome.action.show(tabId);
  } else if (!matchesBeatmapUrl) {
    chrome.action.hide(tabId);
  }
});
