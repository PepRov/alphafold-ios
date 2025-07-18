# PepRop + AlphaFold Integration

This Colab notebook enables automatic prediction of 3D peptide structures using AlphaFold, with seamless integration from the iOS app PepRop.

## Overview

The PepRop iOS app allows users to upload peptide sequences directly from their device. This notebook automatically retrieves the uploaded sequence from a public GitHub Gist, eliminating manual file uploads or path setup.

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

