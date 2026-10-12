# Amarelab

Tracks the lab test history of the owner's patients (dogs, for now), so values can be followed over time and checked against the lab's reference ranges.

## Language

**Patient**:
An individual animal whose lab history is tracked, of a recorded species; in practice mostly the owner's dogs. Every report belongs to exactly one patient. Shown in the interface as "Paciente".
_Avoid_: Dog, pet, animal

**Species**:
The kind of animal a patient is, such as dog or cat. It describes the patient and changes nothing about how results are judged. Shown in the interface as "Espécie".
_Avoid_: Type, kind

**Report**:
One document issued by a lab for one patient and one collection date, reviewed and confirmed by the owner. Shown in the interface as "Exame".
_Avoid_: Exam, test, bloodwork, panel

**Draft**:
An uploaded report that has not been confirmed yet. It holds the files and whatever was read from them, and counts for nothing until confirmed. Shown in the interface as "Rascunho".
_Avoid_: Pending report, unreviewed upload

**Result**:
One measured line on a report: an analyte with its value, unit and the reference range printed on that report. Shown in the interface as "Resultado".
_Avoid_: Measurement, entry, value

**Analyte**:
A thing that labs measure, such as creatinine, independent of any report. Shown in the interface as "Analito".
_Avoid_: Test, marker, parameter, exam

**Catalogue**:
The single list of analytes the app knows. It starts seeded with common ones and grows when a report contains an analyte it lacks.
_Avoid_: Dictionary, analyte list

**Alias**:
Another name or abbreviation a lab prints for an analyte, in any language, used to recognise it on a report.
_Avoid_: Synonym, alternate name

**Merge**:
Folding one analyte into another: its results move to the surviving analyte and its name becomes an alias there.
_Avoid_: Combine, dedupe

**Category**:
A grouping of analytes, such as hematology or biochemistry, used only to organise results on screen. Shown in the interface as "Categoria".
_Avoid_: Panel, section

**Reference range**:
The low and high limits a lab prints next to a result. It belongs to the result, not to the analyte. Shown in the interface as "Valor de referência".
_Avoid_: Normal range, normal values
