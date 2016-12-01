import { SharedAttributes } from '../shared/shared.model';

export interface QuestionElement extends SharedAttributes {
    type: string;
    title: string;
    required: boolean;
    instruction: string;
}
