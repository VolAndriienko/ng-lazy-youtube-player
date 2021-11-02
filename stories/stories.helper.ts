import { Story, StoryContext } from '@storybook/angular/types-6-0';

class StoriesHelper {
  createTemplate<T>(): Story<T> {
    const template: Story<T> = (args: T, context: any) => {
      // context.parameters.args ALWAYS has a correct set of passed parameters without undefined parameters (not like args)
      // but bind it directly with props will not allow us to keep 2-way binding with addons panel
      // instead it allows to remove unused parameters from arguments

      const keys = Object.keys((context as StoryContext).parameters.args);
      // we have here all passed params, for Valid story it will be [isTest, addressTypeEditable, value, requiredAddressParts, selectedAddressType]


      Object.keys(args).forEach(key => !keys.includes(key) && delete (args as any)[key]);
      //removed all unused parameters for current story, for Valid story it will keep only values for [isTest, addressTypeEditable, value, requiredAddressParts, selectedAddressType]

      return ({
        props: args //keep 2-way binding
      });
    }

    return template;
  }
}

export default new StoriesHelper();
