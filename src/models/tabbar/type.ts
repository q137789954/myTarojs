import React from 'react';


export type TabBarsType = Array<Taro.TabBarItem & {middle?: boolean, id: string}>

interface UpdateTabBarsActionType {
    type: 'updateTabBars',
    payload: {
        tabBars: TabBarsType
    }
}

interface UpdateSelectedActionType {
    type: 'updateSelected',
    payload: {
        selectedUrl: string
    }
}

export type ActionType = UpdateTabBarsActionType | UpdateSelectedActionType;

export interface StateType {
    selectedId: string,
    tabBars: TabBarsType,
    dispatch: React.Dispatch<ActionType>
}