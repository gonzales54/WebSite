import Button from './Button'
import Button1 from './Button1';

const Template = (args) => <Button {...args}/>
export const Default = Template.bind({});
Default.args = {
	children: 'Default'
};

export default {
	title: 'Button',
	component: {
		Button, Button1
	}
};

export const HelloButton = () => <Button>Hello World</Button>
export const HelloButton1 = () => <Button1>Hello World1</Button1>
