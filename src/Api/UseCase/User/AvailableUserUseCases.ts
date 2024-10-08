import GetLoggedUserUseCase from "./GetLoggedUser/GetLoggedUserUseCase";
import SaveUserUseCase from "./SaveUser/SaveUserUseCase";
import GetAllUserUseCase from "./getAllUser/GetAllUserUseCase";
import GetAllUserParticipateUseCase from "./getAllUserParticipate/GetAllUserParticipateUseCase";

export type AvailableUserUseCases =
    GetLoggedUserUseCase
    | SaveUserUseCase
    | GetAllUserUseCase
    | GetAllUserParticipateUseCase;
