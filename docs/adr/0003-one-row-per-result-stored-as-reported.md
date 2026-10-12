# One row per result, stored as reported

Each result is its own row holding the analyte, the value, the unit and the reference range exactly as the lab printed them, rather than one column per analyte or values normalised to a standard unit. Labs differ in which analytes they report, in units and in reference ranges, so the printed range is the only correct one for that value, and out-of-range marks come only from it. Results that are not plain numbers (`<0.5`, `negative`) keep their text alongside the numeric value.

## Consequences

- No unit conversion: a chart plots one unit and lists results in other units as not plotted.
- The same analyte under different printed names is unified through catalogue aliases and merging, not by rewriting results.
