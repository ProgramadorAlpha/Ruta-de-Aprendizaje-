def arithmetic_arranger(problems, show_result=False):
  if len(problems) > 5:
    return "Error: Demasiados problemas."
  first_operands = []
  second_operands = []
  operators = []
  results = []
  for problem in problems:
    elements = problem.split()
    if elements[1] != "+" and elements[1] != "-":
      return "Error: El operador debe ser '+' o '-'."
    if not elements[0].isdigit() or not elements[2].isdigit():
      return "Error: Los números solo deben contener dígitos."
    if len(elements[0]) > 4 or len(elements[2]) > 4:
      return "Error: Los números no pueden tener más de cuatro dígitos."
    first_operands.append(elements[0])
    second_operands.append(elements[2])
    operators.append(elements[1])
    if show_result:
      result = str(eval(problem))
      results.append(result)
  vertical_lines = [""] * len(problems)
  top_line = ""
  bottom_line = ""
  result_line = ""
  for i in range(len(problems)):
    width = max(len(first_operands[i]), len(second_operands[i])) + 2
    top_line += first_operands[i].rjust(width) + "    "
    bottom_line += operators[i] + second_operands[i].rjust(width - 1) + "    "
    if show_result:
      result_line += results[i].rjust(width) + "    "
    vertical_lines[i] = "-" * width + "    "
  arranged_problems = top_line.rstrip() + "\n" + bottom_line.rstrip(
  ) + "\n" + "".join(vertical_lines).rstrip()
  if show_result:
    arranged_problems += "\n" + result_line.rstrip()
  return arranged_problems


# Llamada a la función con el argumento show_result en True
print(
  arithmetic_arranger(["32 + 698", "3801 - 2", "45 + 43", "123 + 49"], True))
