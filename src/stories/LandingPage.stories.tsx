import React from "react";
import type {  Meta, StoryObj } from "@storybook/react";
import Navbar from "../components/Navbar";
import Container from "../components/Container";
import Button from "../components/Button";
import ContentBlock from "../components/ContentBlock";
import Heading from "../components/Heading";
const meta: Meta = {
    title: "pages/LandingPage"
}

type Story = StoryObj;

export const LandingPage: Story = {
    // args: {

    // },
    decorators: [
        (Story) => (
            <body className="leading-normal tracking-normal text-white gradient" style={
                { background: "linear-gradient(90deg, #d53369 0%, #daae51 100%)" }
            }>
                <Navbar className="fixed w-full z-30 top-0 text-white">
                    <Container className="w-full mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
                        <div className="pl-4 flex items-center">
                            <a className="toggleColour no-underline hover:no-underline font-bold text-2xl lg:text-4xl text-white">Landing</a>
                        </div>
                        <div className="block lg:hidden pr-4"></div>
                        <div className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20">
                            <ul className="list-reset lg:flex justify-end flex-1 items-center">
                                <li className="mr-3">
                                    <a className="inline-block py-2 px-4 text-black font-bold no-underline" href="#">Active</a>
                                </li>
                                <li className="mr-3">
                                    <a className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4">link</a>
                                </li>
                                <li className="mr-3">
                                    <a className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4">link</a>
                                </li>
                            </ul>
                            <Button>Action</Button>
                        </div>
                    </Container>
                </Navbar>
                <div className="pt-24">
                    <Container className="px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
                        <ContentBlock className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
                            <p className="uppercase tracking-loose w-full">What business are you?</p>
                            <Heading tag="h1" className="my-4 text-5xl font-bold leading-tight">Main Hero Message to sell yourself!</Heading>
                            <p className="leading-normal text-2xl mb-8">Sub-hero message, not too long and not too short. Make it just right!</p>
                            <Button className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg">
                                Subscribe
                            </Button>
                        </ContentBlock>
                        <ContentBlock className="w-full md:w-3/5 py-6 text-center">
                            <img className="w-full md:w-4/5 z-50" src="https://placehold.co/480x414"/>
                        </ContentBlock>
                    </Container>
                </div>
            </body>
        )
    ]
}

export default meta;