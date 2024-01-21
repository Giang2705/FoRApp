import OpenAI from "openai";
import axios from "axios";
const main = () => {
    const client = new OpenAI({
      apiKey: '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'
    })
    const assistantID = 'asst_JBPA46nmUDsH1j0xqt703OEh'
    const threadID  = 'thread_G2eLytocMfYUyqIcj2kemuGG'
    const apiKey = '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'

    // async function createThread() {
    //     const emptyThread = await client.beta.threads.create();
    //     console.log("Thread:  ",emptyThread)
    //     return emptyThread.id
    // }
    // createThread()

    // async function createThread() {
    //   const threadCreateURL = 'https://api.openai.com/v1/threads'
    //   const emptyThread = await axios.post(threadCreateURL,
    //     '',
    //     {headers:{
    //         'Authorization': `Bearer ${apiKey}`,
    //         'OpenAI-Beta': 'assistants=v1'
    //     }})
    //   console.log("New thread created")
    //   return emptyThread.id
    // }
    // createThread()







    // async function createMessage() {
    //   const threadMessages = await client.beta.threads.messages.create(
    //     threadID,
    //     { role: "user", content: "Recommend me food" }
    //   );
    //   console.log(threadMessages);
    // }
    // createMessage()

    // async function createMessage() {
    //   const userPrompt = 'Meat vs Pork'
    //   const threadURL  = `https://api.openai.com/v1/threads/${threadID}/messages`
    //   const createMessage = await axios.post(threadURL,
    //     {
    //       role:'user',
    //       content:userPrompt
    //     },
    //     {headers: {
    //         'Authorization': `Bearer ${apiKey}`,
    //         'OpenAI-Beta': 'assistants=v1'
    //     }})

    //   console.log('Created a message for BOT: ',createMessage);
    // }
    // createMessage()



    // async function runThread() {
    //   const run = await client.beta.threads.runs.create(
    //     threadID,
    //     { assistant_id: assistantID }
    //   );
    //   console.log(run);
    // }
    // runThread()

    // async function runThread() {
    //   const runURL  = `https://api.openai.com/v1/threads/${threadID}/runs`
    //   const run = await axios.post(runURL,
    //     {
    //       assistant_id: assistantID
    //     },
    //     {headers:{
    //       'Authorization': `Bearer ${apiKey}`,
    //       'OpenAI-Beta': 'assistants=v1'
    //     }})
    //   console.log('BOT run called');
    // }
    // runThread()









    // let messagesData = []
    // async function listMessages() {
    //   const threadMessages = await client.beta.threads.messages.list(
    //     threadID
    //   );
    //   messagesData = threadMessages.data.reverse()
    //   const threadLength = messagesData.length
    //   for (let i = 0; i < threadLength; i++){
    //     console.log(messagesData[i].role==='assistant'?'BOT: ':'USER:',messagesData[i].content[0].text.value);
    //   }
    //   return
    // }
    // listMessages()


    // async function listMessages() {
    //   const threadURL  = `https://api.openai.com/v1/threads/${threadID}/messages`
    //   const threadMessages = await axios.get(threadURL,
    //       {headers: {
    //           'Authorization': `Bearer ${apiKey}`,
    //           'OpenAI-Beta': 'assistants=v1'
    //       }})
    //   const messagesData = threadMessages.data.data.reverse()
    //   const threadLength = messagesData.length
    //   for (let i = 0; i < threadLength; i++){
    //     console.log(messagesData[i].content[0].text.value);
    //   }
    //   return
    // }
    // listMessages()



}

main() 