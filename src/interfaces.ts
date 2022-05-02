export interface User {
    login: string,
    password: string,
    _links?: any
}

export interface FeedbackItem {
    id: number,
    text: string,
    userId: number,
    responseItem: ResponseItem
    isCompleted: boolean,
    _links: {
        self: {
            href: string
        }
    }
}

export interface ResponseItem {
    feedbackItemId: number,
    response: string
}