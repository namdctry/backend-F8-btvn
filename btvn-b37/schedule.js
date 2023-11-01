var cron = require("node-cron");
const model = require("./models/index");
const QueueJob = model.queueJob;
const sendMail = require("./jobs/SendMail");
cron.schedule("*/5 * * * * *", async () => {
  console.log("running a task every 5 seconds");
  console.log(222);
  const job = await QueueJob.findOne({
    order: [["createdAt", "ASC"]],
  });
  const { name, email } = JSON.parse(job.value).data.job;
  console.log(name, email);
  new SendMail({ name, email });
  await job.destroy();
  console.log("544564");
});
