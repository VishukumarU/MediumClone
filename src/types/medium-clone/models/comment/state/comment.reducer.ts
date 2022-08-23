import { routerNavigatedAction } from "@ngrx/router-store";
import { createReducer, on } from "@ngrx/store";
import { addCommentAction, addCommentFailureAction, addCommentSuccessAction } from "./actions/add-comment.action";
import { getCommentAction, getCommentFailureAction, getCommentSuccessAction } from "./actions/get-comment.action";

const initialState: MediumClone.ICommentState = {
    comments: null,
    isLoading: false,
    validationErrors: null
};

export const commentReducer = createReducer(
    initialState,
    on(addCommentAction, (state): MediumClone.ICommentState => ({
        ...state,
        isLoading: true
    })),
    on(addCommentSuccessAction, (state, action): MediumClone.ICommentState => {
        const comments = state.comments;
        comments?.push(action.comment);
        return {
            ...state,
            isLoading: false,
            comments
        };
    }),
    on(addCommentFailureAction, (state, action): MediumClone.ICommentState => ({
        ...state,
        isLoading: false,
        validationErrors: action.errors
    })),
    on(routerNavigatedAction, (): MediumClone.ICommentState => initialState),
    on(getCommentAction, (state): MediumClone.ICommentState => ({
        ...state,
        isLoading: true
    })),
    on(getCommentSuccessAction, (state, action): MediumClone.ICommentState => ({
        ...state,
        isLoading: false,
        comments: action.comments
    })),
    on(getCommentFailureAction, (state): MediumClone.ICommentState => ({
        ...state,
        isLoading: false
    }))
)

