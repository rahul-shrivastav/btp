<div align="center">

## NeuralPy

</div>

<div align="center">

![Python](https://img.shields.io/badge/Python-3.9-blue?style=flat&logo=python) 
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.2.0-38B2AC?style=flat&logo=tailwindcss) 
![scikit-learn](https://img.shields.io/badge/scikit--learn-0.24.2-orange?style=flat&logo=scikitlearn)
![pandas](https://img.shields.io/badge/pandas-1.3.3-blue?style=flat&logo=pandas)
![NumPy](https://img.shields.io/badge/NumPy-1.21.2-013243?style=flat&logo=numpy)
![Keras](https://img.shields.io/badge/Keras-2.6.0-D00000?style=flat&logo=keras)
![Neural Networks](https://img.shields.io/badge/Neural%20Networks-Deep%20Learning-blue?style=flat&logo=tensorflow)
![Next.js](https://img.shields.io/badge/Next.js-13.0.0-black?style=flat&logo=nextdotjs)
![Flask](https://img.shields.io/badge/Flask-2.0.1-black?style=flat&logo=flask) 

</div>

<div align="center">
  
[![VISI](https://img.shields.io/badge/VISIT-blue?logo=web&logoColor=white&style=for-the-badge)](https://neural-py.vercel.app/)

</div>

NeuralPy is a web-based application powered by a fine-tuned  `TinyLlama/TinyLlama-1.1B-intermediate-step-1431k-3T`  model that generates Python code from natural language queries and vice versa. The lightweight model is optimized for efficiency, enabling real-time code generation directly in the browser or on resource-constrained systems. NeuralPy serves as an intelligent coding assistant, ideal for learners, developers, and educators.


<div align="center">

## Tech Stack

</div>

- ` Python ` : versatile, high-level, interpreted, easy-to-learn programming language.
- ` Next.js ` : Frontend framework based on React for building dynamic, SSR-enabled interfaces.
- `Tailwind-CSS` : A utility-first CSS framework for building custom, responsive designs quickly by composing classes directly in HTML.
- `Pytorch` : A high-level deep learning API running on top of TensorFlow, used to quickly build and train neural networks with minimal code.

<br>

<div align="center">

## Getting Started

</div>

### 1. Clone the Repository
First, clone the repository to your local machine:


```bash
git clone https://github.com/rahul-shrivastav/NeuralPy.git
```
### 2. Install Dependencies
Change the directory and Install the required dependencies by running:

```bash
cd frontend
npm install
```
### 4. Run the application locally

Now navigate to `/frontend` and run the development frontend server :
```bash
npm run dev
```
Open port `3000` on `localhost` with your browser to see the result. 

<br>
<div align="center">

## Fine-Tuning Highlights

</div>

### Key Libraries & Tools
- ` Transformers, PEFT, BitsAndBytes, TRL (SFTTrainer) ` : orchestrate fine-tuning with quantized models and LoRA adapters.
- ` Pandas, Datasets ` : for dataset prep and handling.
- `Google Colab & Drive` : easy data access and training in the cloud.

### Techniques at a Glance

- 4-Bit Quantization with `BitsAndBytes` (NF4, double-quantization) lowers VRAM usage drastically—enabling efficient fine-tuning even on modest hardware. 
- LoRA (Low-Rank Adaptation) injects lightweight adapter modules into frozen base layers, maintaining performance while tuning significantly fewer parameters. 
- QLoRA-style setup — combining quantization and LoRA for maximal efficiency without loss in effectiveness. 
- Trainer : TRL’s `SFTTrainer` orchestrates training with PEFT integration, using optimizer `paged_adamw_32bit`, cosine learning rate schedule, and gradient accumulation.

### Workflow Summary

- Data prep : Convert CSV with instruction + output columns into conversational tokens using `<|user|> / <|assistant|>` delimiters.
- Load model : 'TinyLlama-1.1B…' in highly-efficient 4-bit mode.
- Configure LoRA : `Rank = 8`, `alpha = 16`, `dropout = 0.05`, task type = `CAUSAL_LM`.
- Train : With FP16, batch size 1, gradient accumulation, 250 steps (max), and mixed-precision.
- Merge adapters : `merge_and_unload()` integrates LoRA weights back into the base model for faster, dependency-free inference.

<div align="center">

[![Huggingface Model Repo](https://img.shields.io/badge/Huggingface%20Model%20Repo-brightgreen?logo=huggingface&logoColor=white&style=for-the-badge)](https://huggingface.co/rahul-shrivastav/Neuralpy-v1)

</div>
