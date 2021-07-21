/* eslint-disable max-len */
const Helper = {
  createSubscriptionNotification(email: string) {
    return {
      subject: 'You have been subscribed',
      from: `Tina Oluwabukola ${process.env.GMAIL_USERNAME}`,
      html: `<p>Hi there,
<p>This is just to let you know you have chosen to be subscribed to this question and will get an email if it receives a answer</p>
    <h3>Tina</h3>`,
      to: email,
    };
  },
  /**
   * options of email to be sentt after questtion is answered
   * @param title
   * @param subscribers
   */
  sendNewAnswerNotification(title: string, subscribers: any) {
    return {
      from: `Tina Oluwabukola ${process.env.GMAIL_USERNAME}`,
      subject: `Your subscribed question - ${title}- has an answer`,
      html: `<p>Hi there,</p>
<p>Your subscribed question has a new answer</p>
        <h3>Tina</h3>`,
      to: subscribers.map((sub: { email: string }) => sub.email),
    };
  },
};
export default Helper;
