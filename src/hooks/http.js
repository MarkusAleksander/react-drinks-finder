import { useCallback, useReducer } from "react";

const initialState = {
    loading: false,
    error: null,
    responseData: null,
    reqId: null,
    reqExtra: null
};

const httpReducer = (currentHttpState, action) => {
    switch (action.type) {
        case "SEND":
            return { ...currentHttpState, loading: true, error: false, responseData: null, reqId: action.reqId, reqExtra: null }
        case "RESPONSE":
            return { ...currentHttpState, loading: false, responseData: action.responseData, reqExtra: action.reqExtra }
        case "ERROR":
            return { ...currentHttpState, loading: false, error: action.error }
        case "CLEAR":
            return initialState
        default:
            throw new Error("Should not get here");
    }
}

const useHttp = () => {
    const [httpState, dispatchHttpState] = useReducer(httpReducer, initialState);

    const clear = () => {
        dispatchHttpState({ type: "CLEAR" });
    }

    const sendRequest = useCallback((url, method, body, reqId, reqExtra) => {
        dispatchHttpState({ type: "SEND", reqId: reqId });

        fetch(url, {
            method,
            body,
            headers: { "Content-Type": "application/json" }
        })
            .then(res => res.json())
            .then(res => dispatchHttpState({
                type: "RESPONSE",
                responseData: res,
                reqExtra: reqExtra
            }))
            .catch(err => dispatchHttpState({
                type: "ERROR",
                error: err.message
            }));
    }, [])

    return {
        isLoading: httpState.loading,
        responseData: httpState.responseData,
        error: httpState.error,
        reqId: httpState.reqId,
        reqExtra: httpState.reqExtra,
        sendRequest: sendRequest,
        clear: clear
    }
}

export default useHttp;