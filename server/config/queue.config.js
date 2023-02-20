import Bull from 'bull';

const queue = new Bull('api_queue');

export default queue;
