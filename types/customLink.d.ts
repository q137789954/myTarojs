declare namespace CustomLink {
    interface NavigateToOption {
        type?: 'navigateTo',
        url: string,
        complete?: (data: any) => void,
        fail?: (data: any) => void,
        success?: (data: any) => void,
        events?: {
            [key: string]: (data: any) => void;
        }
    }
    
    interface SwitchTab {
        type?: 'switchTab',
        url: string,
        complete?: (data: any) => void,
        fail?: (data: any) => void,
        success?: (data: any) => void,
    }
    
    interface NavigateBackOption {
        type?: 'navigateBack',
        delta: number,
        complete?: (data: any) => void,
        fail?: (data: any) => void,
        success?: (data: any) => void,
    }
    
    interface OtherOption {
        type: 'reLaunch' | 'redirectTo',
        url: string,
        complete?: (data: any) => void,
        fail?: (data: any) => void,
        success?: (data: any) => void,
    }
    type CustomLinkOptions = NavigateToOption | NavigateBackOption | SwitchTab | OtherOption;
}