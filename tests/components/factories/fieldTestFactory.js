import { Field } from "../../../components/fields/field.js";
import { PlayerTestFactory } from "./playerTestFactory.js";

export class FieldTestFactory{
  static create(){
    return new Field(
        PlayerTestFactory.create(true),
        PlayerTestFactory.create(false));
  }
}