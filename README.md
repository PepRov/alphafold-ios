# PepRop + AlphaFold Integration 

## Overview

This Colab notebook enables seamless integration with the iOS app **PepRop**, automatically loading peptide sequences from PepRop for 3D structure prediction using AlphaFold.

Once the peptide sequence is fetched, the notebook runs AlphaFold to predict the 3D structure of the peptide.

## Features

- **Automatic sequence retrieval:** Fetches the latest peptide FASTA file uploaded by PepRop.
- **Seamless integration:** No manual input needed after sequence upload.
- **AlphaFold prediction:** Runs state-of-the-art AlphaFold model for 3D peptide structure prediction.
- **Runs entirely in Google Colab:** No local setup required.

## Usage

1. Input your peptide sequence via the PepRop interactive table keys.
2. The Colab notebook opens automatically and asks your permission to log in to your Google account.
3. The notebook automatically retrieves the sequence and runs the AlphaFold prediction.
4. View and download the predicted 3D structures directly from Colab.

---

## License, Acknowledgments, and References

> The following sections are adapted from the original [ColabFold notebook](https://github.com/sokrypton/ColabFold), which builds on AlphaFold2 by DeepMind.

The source code of ColabFold is licensed under the MIT License.  
Additionally, this notebook uses AlphaFold2 source code and its parameters, licensed under Apache 2.0 and CC BY 4.0 respectively.  
Refer to the [AlphaFold license](https://github.com/deepmind/alphafold#license) for details.

### Acknowledgments

We thank the original authors and contributors of ColabFold and AlphaFold:

- The **AlphaFold team** for developing and open-sourcing the original model.
- **KOBIC** and the **Söding Lab** for MMseqs2 MSA server resources.
- **Richard Evans**, **David Koes**, **Do-Yoon Kim**, and others (see original notebook).
- A Colab notebook by **Sergey Ovchinnikov**, **Milot Mirdita**, and **Martin Steinegger**.

### Reference

Mirdita M, Schütze K, Moriwaki Y, Heo L, Ovchinnikov S, Steinegger M.  
**ColabFold: Making protein folding accessible to all.** *Nature Methods*, 2022.  
[https://doi.org/10.1038/s41592-022-01488-1](https://doi.org/10.1038/s41592-022-01488-1)

---

## Modifications

This notebook has been modified to accept a FASTA file uploaded directly from an iOS app to a public GitHub Gist. The Colab notebook automatically fetches the latest sequence (e.g., `MYSEQUENCE.fasta`) via the raw Gist URL — removing the need for manual uploads.

---

## Disclaimer

This project is **not affiliated with DeepMind**, **MIT**, or the official AlphaFold project.  
It is a community-driven tool that utilizes AlphaFold for educational or integration purposes.

---


