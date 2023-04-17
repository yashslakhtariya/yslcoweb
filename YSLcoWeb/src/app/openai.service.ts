import { Injectable } from '@angular/core';
import { Configuration, OpenAIApi } from 'openai';

@Injectable({
  providedIn: 'root'
})
export class OpenaiService {
  private openai: OpenAIApi;
  configuration = new Configuration({
    apiKey: "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",
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
