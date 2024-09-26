import type { StoryObj } from "@storybook/react"
import {TInput,  type TInputProps} from "./TInput"
import { fn } from '@storybook/test';
const meta: {
	args: TInput
	argTypes: {}
	component: ({ label }: TInputProps) => JSX.Element
	title: string,
	tags: Array<string>
} = {
	title: "Design System/Atoms/TInput",
	component: TInput,
	args: {
		label:"Hola",
	},
	argTypes: {},
	tags: ['autodocs'],
}

type Story = StoryObj<typeof TInput>

export const Default: Story = {
	render: (args) => (
		<>
			{" "}
			<TInput {...args} />{" "}
		</>
	),
}

export default meta