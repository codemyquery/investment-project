export interface ActionMenu {
    commands: string[];
}

type Groups = 'Admin' | 'Viewer' | 'Maintainance';
export interface NavigationMenu {
    id: string;
    i18nKey: string;
    visible: boolean;
    to: string;
    path: string;
    allowedActions?: ActionMenu[];
    component: (props: any) => JSX.Element;
    subMenu?: Array<NavigationMenu>;
    allowedGroups: Array<Groups>;
}

export interface MainPageProps {
    currentPath?: string;
    subMenus?: NavigationMenu[];
}

export interface RoutingURL {
    to: string,
    path: string
}