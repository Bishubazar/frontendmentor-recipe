import { Children, useState } from "react";
import {
    ingredients,
    instructions,
    nutrition,
    preparations,
} from "./constants";

const ContentBox = ({ children, title }) => {
    return (
        <div className="flex flex-col">
            <h1 className="mb-6 title">{title}</h1>
            {children}
        </div>
    );
};

function Divider() {
    return <div className="w-full h-[1px] bg-gray-200" />;
}

function App() {
    return (
        <main className="flex flex-col max-w-screen-md gap-12 p-10 mx-auto my-32 bg-white rounded-3xl">
            <img
                src="/images/image-omelette.jpeg"
                alt=""
                className="rounded-2xl"
            />
            <div className="flex flex-col gap-8">
                <h1 className="text-[42px] f-young  text-stone-900">
                    Simple Omelette Recipe
                </h1>
                <p className="">
                    An easy and quick dish, perfect for any meal. This classic
                    omelette combines beaten eggs cooked to perfection,
                    optionally filled with your choice of cheese, vegetables, or
                    meats.
                </p>

                <div className="p-8 rounded-lg bg-rose-light">
                    <h1 className="mb-4 text-xl font-semibold text-rose-dark">
                        Preparation time
                    </h1>
                    <ul className="pl-5 list-disc indent-4">
                        {preparations.map((i, index) => {
                            return (
                                <li
                                    key={index}
                                    className={"mb-2 last-of-type:mb-0"}
                                >
                                    <span className="font-bold ">
                                        {i.title}:{" "}
                                    </span>
                                    {i.description}
                                </li>
                            );
                        })}
                    </ul>
                </div>

                <ContentBox title="Ingredients">
                    <ul className="pl-5 list-disc indent-4">
                        {ingredients.map((i, index) => (
                            <li className="mb-2 last-of-type:mb-0" key={index}>
                                {i}
                            </li>
                        ))}
                    </ul>
                </ContentBox>

                <Divider />

                <ContentBox title="Instructions">
                    {instructions.map((i, index) => (
                        <div className="flex gap-5 pl-2 pr-6 mb-2 last-of-type:mb-0">
                            <p className="font-bold text-brown">{index + 1}.</p>
                            <p className="" key={index}>
                                <span className="font-bold">{i.action}:</span>{" "}
                                {i.description}
                            </p>
                        </div>
                    ))}
                </ContentBox>

                <Divider />

                <ContentBox title="Nutrition">
                    <p className="mb-5">
                        The table below shows nutritional values per serving
                        without the additional fillings.
                    </p>
                    {nutrition.map((i, index) => (
                        <div className="flex gap-5 px-8 py-3 border-b last-of-type:border-0">
                            <p className="flex-1 ">{i.title}</p>
                            <p
                                className="flex-1 font-bold text-brown"
                                key={index}
                            >
                                {i.description}
                            </p>
                        </div>
                    ))}
                </ContentBox>
            </div>
        </main>
    );
}

export default App;
