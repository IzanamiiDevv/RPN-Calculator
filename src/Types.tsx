type TDisplay = {
    display: string;
}

type TPosition = {
    x: number;
    y: number;
}

type TOffset = {
    x: number;
    y: number;
}

type TButton = {
    setToken: Function;
    token: string;
    type: string;
}

type Result = string | number;

export type { TDisplay, TPosition, TOffset, TButton, Result };