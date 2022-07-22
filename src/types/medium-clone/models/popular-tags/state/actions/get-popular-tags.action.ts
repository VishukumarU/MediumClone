import { createAction, props } from "@ngrx/store";
import { ActionTypes } from "./action-types";

export const getPopularTagsAction = createAction(
    ActionTypes.GET_POPULAR_TAGS
);

export const getPopularTagsSuccessAction = createAction(
    ActionTypes.GET_POPULAR_TAGS_SUCCESS,
    props<{ populartags: string[] }>()
)

export const getPopularTagsFailureAction = createAction(
    ActionTypes.GET_POPULAR_TAGS_FAILURE
)