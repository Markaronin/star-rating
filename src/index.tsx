import React, { Component } from "react";

const starEmpty = (
    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" stroke="white" fillRule="evenodd" clipRule="evenodd">
        <path d="M15.668 8.626l8.332 1.159-6.065 5.874 1.48 8.341-7.416-3.997-7.416 3.997 1.481-8.341-6.064-5.874 8.331-1.159 3.668-7.626 3.669 7.626zm-6.67.925l-6.818.948 4.963 4.807-1.212 6.825 6.068-3.271 6.069 3.271-1.212-6.826 4.964-4.806-6.819-.948-3.002-6.241-3.001 6.241z" />
    </svg>
);

const starFull = (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" stroke="white" fill="white" viewBox="0 0 24 24">
        <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
    </svg>
);

interface StarRatingProps {
    rating: number | undefined;
    maxRating: number;
    updateRating: (value: number | undefined) => void;
}
interface StarRatingState {}
export class StarRating extends Component<StarRatingProps, StarRatingState> {
    constructor(props: StarRatingProps) {
        super(props);
        this.state = {};
    }

    render(): JSX.Element {
        const ratingStarsElements = [];
        for (let i = 1; i <= this.props.maxRating; i++) {
            let element;
            if (this.props.rating && this.props.rating >= i) {
                element = starFull;
            } else {
                element = starEmpty;
            }
            ratingStarsElements.push(
                <span
                    onClick={() => {
                        if (i === this.props.rating) {
                            this.props.updateRating(undefined);
                        } else {
                            this.props.updateRating(i);
                        }
                    }}
                >
                    {element}
                </span>,
            );
        }

        return (
            <div>
                {ratingStarsElements.map((el, i) => (
                    <span key={i}>{el}</span>
                ))}
            </div>
        );
    }
}
