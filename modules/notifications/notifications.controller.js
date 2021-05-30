const webPush = require("web-push");

webPush.setVapidDetails(process.env.WEB_PUSH_CONTACT, process.env.PUBLIC_VAPID_KEY, process.env.PRIVATE_PUBLIC_KEY);

const sendNotification = async (req, res, { title, content }) => {
  const payload = {
    title: title,
    content: content,
  };

  webPush.sendNotification(payload);
};

module.exports = sendNotification;
