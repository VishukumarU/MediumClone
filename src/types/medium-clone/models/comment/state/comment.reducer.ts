import { routerNavigatedAction } from "@ngrx/router-store";
import { createReducer, on } from "@ngrx/store";
import { addCommentAction, addCommentFailureAction, addCommentSuccessAction } from "./actions/add-comment.action";
import { getCommentAction, getCommentFailureAction, getCommentSuccessAction } from "./actions/get-comment.action";
import { removeCommentAction, removeCommentFailureAction, removeCommentSuccessAction } from "./actions/remove-comment.action";

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
        const comments = state.comments?.length ? state.comments?.slice() : null;
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
    })),
    on(removeCommentAction, (state): MediumClone.ICommentState => ({
        ...state,
        isLoading: true
    })),
    on(removeCommentSuccessAction, (state, action): MediumClone.ICommentState => {
        const comments = state.comments?.length ? state.comments?.slice() : null;
        if (comments?.length) {
            comments?.splice(state.comments!.findIndex(comment => comment.id === action.id), 1);
        }
        return {
            ...state,
            isLoading: false,
            comments
        };
    }),
    on(removeCommentFailureAction, (state): MediumClone.ICommentState => ({
        ...state,
        isLoading: false
    })),
)

