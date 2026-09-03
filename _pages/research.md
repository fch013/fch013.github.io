---
title: "Research"
permalink: /research/
excerpt: "Research in optical microscopy, computational imaging, and physics-informed learning"
author_profile: true
---

I combine optical system design, physical modeling, and computational reconstruction for volumetric imaging and precise light control.

## Light-Field and Computational Imaging

<article class="research-entry" aria-labelledby="rl-light-field">
  <a class="research-entry__figure" href="{{ '/images/research/rl-light-field.png' | relative_url }}" target="_blank" rel="noopener" aria-label="Open the full-size Richardson-Lucy light-field figure in a new tab">
    <img src="{{ '/images/research/rl-light-field.png' | relative_url }}" alt="Optical forward model and Richardson-Lucy-based deconvolution network for light-field volume reconstruction" width="4308" height="2928" decoding="async">
  </a>
  <div class="research-entry__details">
    <h3 id="rl-light-field">Physics-Guided Light-Field Reconstruction</h3>
    <p class="research-entry__summary">This ongoing project combines light-field microscopy with a Richardson-Lucy-inspired deconvolution network for 3D reconstruction. The framework brings optical forward modeling into the learning process and combines coarse and fine image features. It aims to connect physics-based reconstruction with learned inference for selective-volume multiphoton imaging.</p>
    <p class="research-entry__publication">Richardson-Lucy-Based Deconvolution Network for Light Field Microscopy<br><span class="research-entry__venue"><em>Manuscript in preparation</em></span></p>
    <p class="research-entry__links"><a href="{{ '/images/research/rl-light-field.png' | relative_url }}" target="_blank" rel="noopener">Figure <span class="visually-hidden">(opens in a new tab)</span></a></p>
  </div>
</article>

<article class="research-entry" aria-labelledby="selective-light-field">
  <a class="research-entry__figure" href="{{ '/images/research/selective-light-field.png' | relative_url }}" target="_blank" rel="noopener" aria-label="Open the full-size selective-volume light-field figure in a new tab">
    <img src="{{ '/images/research/selective-light-field.png' | relative_url }}" alt="Light-field measurements, reconstructed microscopy images, and depth-coded volume projections" width="4271" height="2626" loading="lazy" decoding="async">
  </a>
  <div class="research-entry__details">
    <h3 id="selective-light-field">Scanless Volumetric Bioimaging</h3>
    <p class="research-entry__summary">Temporal focusing restricts multiphoton illumination to the volume of interest, reducing background and improving contrast in light-field microscopy. Phase-space deconvolution then reconstructs the 3D volume from a single camera exposure. The system was demonstrated on fluorescent beads and a GFP-labeled lobe of the Drosophila mushroom body.</p>
    <p class="research-entry__publication"><a href="https://doi.org/10.1364/BOE.473807">Light-Field Microscopy With Temporal Focusing Multiphoton Illumination for Scanless Volumetric Bioimaging</a><br><span class="research-entry__venue"><em>Biomedical Optics Express</em> · 2022</span></p>
    <p class="research-entry__links"><a href="{{ '/images/research/selective-light-field.png' | relative_url }}" target="_blank" rel="noopener">Figure <span class="visually-hidden">(opens in a new tab)</span></a></p>
  </div>
</article>

## Temporal Focusing and Multiphoton Control

<article class="research-entry" aria-labelledby="vectorial-lstf">
  <a class="research-entry__figure" href="{{ '/images/research/vectorial-lstf.png' | relative_url }}" target="_blank" rel="noopener" aria-label="Open the full-size vectorial temporal-focusing figure in a new tab">
    <img src="{{ '/images/research/vectorial-lstf.png' | relative_url }}" alt="Temporal-focusing optical propagation layouts and vectorial focal-field illustrations" width="6742" height="3944" loading="lazy" decoding="async">
  </a>
  <div class="research-entry__details">
    <h3 id="vectorial-lstf">Modeling Temporal-Focusing Excitation</h3>
    <p class="research-entry__summary">This ongoing project develops a vectorial spatiotemporal model of line-scanning temporal focusing. It examines how spectral dispersion, optical propagation, and vectorial focusing shape the excitation field in space and time. The goal is to provide a physical basis for understanding axial confinement and guiding the design of temporal-focusing illumination systems.</p>
    <p class="research-entry__publication">Vectorial Spatiotemporal Modeling of Line-Scanning Temporal Focusing<br><span class="research-entry__venue"><em>Manuscript in preparation</em></span></p>
    <p class="research-entry__links"><a href="{{ '/images/research/vectorial-lstf.png' | relative_url }}" target="_blank" rel="noopener">Figure <span class="visually-hidden">(opens in a new tab)</span></a></p>
  </div>
</article>

<article class="research-entry" aria-labelledby="dl-cgh">
  <a class="research-entry__figure" href="{{ '/images/research/dl-cgh.png' | relative_url }}" target="_blank" rel="noopener" aria-label="Open the full-size deep-learning holography figure in a new tab">
    <img src="{{ '/images/research/dl-cgh.png' | relative_url }}" alt="Learning-based hologram generation and temporal-focusing optical setup for three-dimensional multiphoton stimulation" width="4102" height="2044" loading="lazy" decoding="async">
  </a>
  <div class="research-entry__details">
    <h3 id="dl-cgh">Holographic 3D Multiphoton Stimulation</h3>
    <p class="research-entry__summary">This work combines an unsupervised hologram-generation network with temporal focusing to produce axially confined 3D multiphoton stimulation. A digital propagation matrix supports targets at arbitrary depths without adding a separate network input layer for each plane. A physics-based loss accounts for excitation efficiency, balancing rapid hologram generation with precise spatial confinement.</p>
    <p class="research-entry__publication"><a href="https://doi.org/10.1364/OE.505956">Deep-Computer-Generated Holography With Temporal Focusing and a Digital Propagation Matrix for Rapid 3D Multiphoton Stimulation</a><br><span class="research-entry__venue"><em>Optics Express</em> · 2024</span></p>
    <p class="research-entry__links"><a href="{{ '/images/research/dl-cgh.png' | relative_url }}" target="_blank" rel="noopener">Figure <span class="visually-hidden">(opens in a new tab)</span></a></p>
  </div>
</article>

<article class="research-entry" aria-labelledby="multiline-tf">
  <a class="research-entry__figure" href="{{ '/images/research/multiline-tf.png' | relative_url }}" target="_blank" rel="noopener" aria-label="Open the full-size parallel multiline temporal-focusing figure in a new tab">
    <img src="{{ '/images/research/multiline-tf.png' | relative_url }}" alt="DMD-based multiphoton microscopy setup with optimized parallel multiline illumination patterns" width="2676" height="1448" loading="lazy" decoding="async">
  </a>
  <div class="research-entry__details">
    <h3 id="multiline-tf">Parallel Multiline Temporal Focusing</h3>
    <p class="research-entry__summary">A digital micromirror device projects multiple excitation lines in parallel, reducing the scanning burden of line-by-line temporal-focusing microscopy. Optimizing the line width and spacing preserves tight axial confinement while covering the field with fewer patterns. Experiments in mouse skin demonstrated improved optical sectioning and reduced scattering background.</p>
    <p class="research-entry__publication"><a href="https://doi.org/10.1117/1.JBO.26.1.016501">Temporal Focusing Multiphoton Microscopy With Optimized Parallel Multiline Scanning for Fast Biotissue Imaging</a><br><span class="research-entry__venue"><em>Journal of Biomedical Optics</em> · 2021</span></p>
    <p class="research-entry__links"><a href="{{ '/images/research/multiline-tf.png' | relative_url }}" target="_blank" rel="noopener">Figure <span class="visually-hidden">(opens in a new tab)</span></a></p>
  </div>
</article>

## Adaptive Optics and Wavefront Sensing

<article class="research-entry" aria-labelledby="dl-wavefront">
  <a class="research-entry__figure" href="{{ '/images/research/dl-wavefront.png' | relative_url }}" target="_blank" rel="noopener" aria-label="Open the full-size beam-profile and wavefront sensing figure in a new tab">
    <img src="{{ '/images/research/dl-wavefront.png' | relative_url }}" alt="Microlens-array measurements and a neural network jointly reconstructing wavefront and intensity profiles" width="2557" height="1755" loading="lazy" decoding="async">
  </a>
  <div class="research-entry__details">
    <h3 id="dl-wavefront">Learning-Based Wavefront and Beam Sensing</h3>
    <p class="research-entry__summary">A microlens-array sensor and physical-constraint learning jointly recover the incident wavefront and beam intensity profile. The network is pretrained on simulated measurements and fine-tuned with experimentally acquired data to connect the optical model to the real system. This approach enables real-time reconstruction and improves sensitivity to local wavefront distortions and nonuniform illumination.</p>
    <p class="research-entry__publication"><a href="https://doi.org/10.1109/JPHOT.2025.3561931">Microlens Array-Based Beam Profile and Wavefront Sensor With Physical Constraint Learning</a><br><span class="research-entry__venue"><em>IEEE Photonics Journal</em> · 2025</span></p>
    <p class="research-entry__links"><a href="{{ '/images/research/dl-wavefront.png' | relative_url }}" target="_blank" rel="noopener">Figure <span class="visually-hidden">(opens in a new tab)</span></a></p>
  </div>
</article>

{% include research-lightbox.html %}

## Complete academic record

For my complete publication, conference, and patent record, see [Google Scholar](https://scholar.google.com/citations?user=3wY6nq8AAAAJ) or [download my CV](/files/CV_FengChun_Hsu.pdf).
