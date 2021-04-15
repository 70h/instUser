
    export enum UserStatus{
        active = 'ACTIVE',
        disabled ='DISABLED',
        banned = 'BANNED',
    }
    
    export interface User {
        uuid: number;
        firstName: number;
        lastName: string;
        pseudoName: string;
        status: UserStatus;
        createdAt: string;
        updatedAt: string;
        deletedAt: string;
    }

    export interface Photo {
        id: number;
        userId: User['uuid'];
        imgUrl: string;
        verified: boolean;
        description: string;
        fireCount: number;
        createdAt: string;
        updatedAt: string;
        deletedAt: string;
    }
    
    export interface Tag {
        id: number;
        photoId: number;
        userId: User['uuid'];
        tags: string;
        createdAt: string;
        updatedAt: string;
        deletedAt: string;
    }