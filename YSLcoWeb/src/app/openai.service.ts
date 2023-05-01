import { Injectable } from '@angular/core';
import { Configuration, OpenAIApi } from 'openai';

@Injectable({
  providedIn: 'root'
})
export class OpenaiService {
  private openai: OpenAIApi;
  configuration = new Configuration({
    apiKey: "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"
    // api key expired because of leaking publicly after making gith repo private to public
    // will update soon after making repo private again
  });

  constructor() {
    this.openai = new OpenAIApi(this.configuration);
  }

  generateText(prompt: string):Promise<string | undefined>{
   return this.openai.createCompletion({
        model: "text-davinci-003",
        prompt: prompt,
        max_tokens: 640
      }).then(response => {
        return response.data.choices[0].text;
      }).catch(error=>{
        return 'Something went wrong';
      });
  }
}
