# STEP 2 of SWEAP data processing

import os
import numpy as np
from matplotlib import pyplot as plt

# orbits_list = os.listdir(f'wispr_txt_data')
temp = []
count_nan = 0

### CHANGE THESE VARIABLES ###
NUMORBITS = 14
instr = "spani" # change this to "spc", "spane", or "spani" depending on which instrument you are using
mode = "normal" # change this to "normal" or "date" depending on which mode you are using

if instr == "spani": # only orbits 2-8 have data for spani
    start = 2
    end = NUMORBITS
else:
    start = 1
    end = NUMORBITS
if mode == "date":
    instr += "date"
    
with open(f'sweap_data/{instr}_list.js', 'w') as l:
    l.write(f"// 3D array of {instr.upper()} data (obtained via SWEAP Level-3 FITS Data -> pyspedas_data_analysis.ipynb -> txt files -> read_sweaptxt.py -> formatted 3D array)\n")
    if instr == "spc":
        l.write("// INDICES:      0                1                    2                     3                4          5            6                   7 \n")
        l.write("// DESCRIPTION:  YYYYMMDD_HHMM |  P VELOCITY (km/s)  | P DENSITY (cm^-2)  |  P TEMP (K)     | X-COORD  | Y-COORD    | DISTANCE (km)     | PSP VELOCITY (km/s)\n")
    l.write(f'var {instr}List = [')
    if mode=="date":
        instr = instr.replace("date", '')
    for n in range(1, start):
        l.write("[],\n")
    for n in range(start, end+1): 
        f = open(f'sweap_data/sweap_txt_data/{instr}_orbit{n}.txt','r')
        lines = f.readlines()
        l.write('[')
        for i in range(len(lines)):
            line = lines[i]
            output = "["
            rline = line.replace('\n','').split(', ')
            if mode=="normal":
                for p in range(len(rline)):
                    j = rline[p]
                    if p==3:
                        temp.append(float(j))
                    if j == "nan":
                        count_nan += 1
                    elif '.' in j: #converts to float if the string is a float, since only the floats contain '.'
                        output += f'{float(j)}, ' # add :.0f for spane to reduce the number of decimal places
                    else:
                        output += f"'{j}', "
                output = output[:-2] # removes the last comma and space
                if i == len(lines)-1:
                    output += ']\n'
                else:
                    output += '],\n'
                l.write(output)
            elif mode=="date":
                l.write(f'"{rline[0]}",\n')
        if n==NUMORBITS:
            l.write(']];')
        else:
            l.write('],\n')
        f.close()
        # print(f"Minimum Temp: {min(temp)}")
        # print(f"Maximum Temp: {max(temp)}")
        # print("Number of nan values: ", count_nan)
        # plt.plot(np.arange(0, len(temp)), temp)
        # plt.show()
    for n in range(end+1, NUMORBITS+1):
        if n==NUMORBITS:
            l.write('[]];')
        else:
            l.write('[],\n')
