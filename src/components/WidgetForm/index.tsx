import { useState } from "react";

import bugImageUrl from '../../assets/bug.svg';
import ideiaImageUrl from '../../assets/idea.svg';
import thoughtImageUrl from '../../assets/thought.svg';

import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "./Steps/FeedbackSuccessStep";



export const feedbackTypes = {
    BUG: {
        title: 'Problema',
        image: {
            source: bugImageUrl,
            alt: 'Imagem de um inseto'
        }
    },

    Idea: {
        title: 'Ideia',
        image: {
            source: ideiaImageUrl,
            alt: 'Imagem de uma lampada'
        }
    },

    Other: {
        title: 'Outros',
        image: {
            source: thoughtImageUrl,
            alt: 'Imagem de um balão de pensamento'
        }
    }
}

export type FeedbackType = keyof typeof feedbackTypes

export function WidgetForm() {

    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
    const [ feedbackSent, setFeedbanckSent] = useState(false);

    function handleRestartFeedback(){
        setFeedbanckSent(false);
        setFeedbackType(null);
    }

    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">

            { feedbackSent ? (
                <FeedbackSuccessStep  onFeedbackSent={handleRestartFeedback}/>
            ): <>
                        {
                !feedbackType ?
                    (
                        <FeedbackTypeStep onFeedbackTypeChange={setFeedbackType}/>
                    )
                    : (
                        <FeedbackContentStep 
                            feedbackType={feedbackType}
                            onFeedbackSent={() => setFeedbanckSent(true)}
                            onFeedbackRestartRequested={handleRestartFeedback}
                            />
                    )
            }</>
        }

            <footer className="text-xl text-neutral-400">
                Feito com ❤ pela <a className="underline underline-offset-2" href="https://www.rocketseat.com.br/">Rocketseat</a>
            </footer>
        </div>
    )
}