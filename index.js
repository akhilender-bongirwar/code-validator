/**
 * This is the main entrypoint to your Probot app
 * @param {import('probot').Probot} app
 */
const axios = require('axios');
module.exports = (app) => {
  app.log.info("Yay, the app was loaded!");

  app.on("issues.opened", async (context) => {
    app.log.info(context.payload.issue.body);
    const myCode = context.payload.issue.body;
    try {
      const requirements = {
        language: "python",
        version: "3.10.0",
        files: [
          {
            name: "my_cool_code.py",
            content: myCode
          },
        ],
      };
      const response = await fetch('https://emkc.org/api/v2/piston/execute', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requirements),
      });

      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }

      const responseData = await response.json();
      const output = responseData.run.output;
      app.log.info('Output:', output);

      const issueComment = context.issue({
        body: `Output of the above python code : ${output}`,
      });
      return context.octokit.issues.createComment(issueComment);

    } catch (error) {
      app.log.error("error")
      const issueComment = context.issue({
        body: "Error in executing the python code!!",
      });
      return context.octokit.issues.createComment(issueComment);
    }
  });

};
